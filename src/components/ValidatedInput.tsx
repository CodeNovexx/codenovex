import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  validation?: (value: string) => { valid: boolean; message?: string };
  className?: string;
  isTextarea?: boolean;
  rows?: number;
}

export const ValidatedInput = ({
  label,
  type,
  id,
  name,
  placeholder,
  required = false,
  validation,
  className = "",
  isTextarea = false,
  rows = 6,
}: FormInputProps) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [validationState, setValidationState] = useState<{
    valid: boolean;
    message?: string;
  }>({ valid: true });

  useEffect(() => {
    if (isTouched && validation) {
      setValidationState(validation(value));
    }
  }, [value, isTouched, validation]);

  const showValidation = isTouched && value.length > 0;
  const isValid = validationState.valid;
  const isInvalid = !validationState.valid;

  const inputBaseClass = `w-full px-5 py-4 bg-gray-800/80 backdrop-blur-sm border text-white rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 placeholder-gray-500 ${className}`;

  const borderClass = showValidation
    ? isValid
      ? "border-green-500 focus:border-green-500 focus:ring-green-500/30"
      : "border-red-500 focus:border-red-500 focus:ring-red-500/30"
    : "border-gray-700 focus:border-brand-primary focus:ring-brand-primary/30 hover:border-brand-primary/50";

  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={`block mb-3 font-semibold text-gray-300 group-focus-within:text-brand-primary transition-colors text-sm`}
      >
        {label} {required && <span className="text-brand-primary">*</span>}
      </label>

      <div className="relative">
        <InputComponent
          type={!isTextarea ? type : undefined}
          id={id}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setIsTouched(true)}
          className={`${inputBaseClass} ${borderClass} ${
            showValidation && isValid ? "pr-12" : ""
          }`}
          placeholder={placeholder}
          required={required}
          rows={isTextarea ? rows : undefined}
        />

        {/* Validation icon */}
        <AnimatePresence>
          {showValidation && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {isValid ? (
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none`}
        />
      </div>

      {/* Validation message */}
      <AnimatePresence>
        {showValidation && isInvalid && validationState.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-sm text-red-400 flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4" />
            {validationState.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

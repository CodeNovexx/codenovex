import { useTranslation } from "react-i18next";

const Loading = () => {
  const { t } = useTranslation();
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-white text-lg font-semibold">{t("loading.LOADING")}</p>
          <div id="wave">
            <span className="dot"></span>
            <span className="second_dot"></span>
            <span className="third_dot"></span>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-20 h-1 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

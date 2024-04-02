import CloseIcon from "./Closeicon";
import ImageCropper from "./ImageCropper";

const TailwindModal = ({ updateAvatar, closeModal, updateLogo }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-10 w-screen px-60 py-20  overflow-y-auto">
        <div className="flex min-h-800px justify-center px-2 py-12 text-center ">
          <div className="relative w-[80%] sm:w-[80%] min-h-[50vh] rounded-2xl bg-gray-800 text-slate-100 text-left shadow-xl transition-all">
            <div className="px-5 py-4">
              <button
                type="button"
                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none absolute top-2 right-2"
                onClick={closeModal}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon />
              </button>
              <ImageCropper
                updateAvatar={updateAvatar}
                closeModal={closeModal}
                updateLogo={updateLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TailwindModal;
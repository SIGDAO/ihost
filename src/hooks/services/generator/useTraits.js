import { useGenerator } from "@/providers/GeneratorProvider";
import { useToast } from "@chakra-ui/react";
import errorHandler from "@/utils/errorHandler";
import Resizer from "react-image-file-resizer";
export const useTraits = () => {
  // maybe put in other place
const generateNewFileName = (originalName,index) => {
  // Generate a new file name here. For example:
  const timestamp = Date.now();
  const extension = originalName.split('.').pop();
  return `new_image${index}_${timestamp}.${extension}`;
};
//
  const toast = useToast({
    title: "Error",
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "bottom",
  });
  const { currentLayer, imageDimension, setImageDimension, setLayers,layers } =
    useGenerator();

  const DeleteAllTraits = () => {
    setLayers((prevState) => {
      return prevState.map((layer, idx) => {
        if (idx === currentLayer) {
          return {
            ...layer,
            images: [],
          };
        }
        return layer;
      });
    });
  };

  const DeleteTrait = (imageName) => {
    setLayers((prevState) => {
      const filteredImages = prevState[currentLayer].images.filter(
        (image) => image.name !== imageName,
      );
      prevState[currentLayer].images = filteredImages;
      return [...prevState];
    });
  };

  const UploadAssets = async (files) => {
    try {
      console.log("Uploaded Image: ", files)
      const newImages = await ConstructImages(files);
      console.log("Upload image to new layers: ", newImages)
      if (!newImages.length)
        throw new Error("Please try adding your traits again");

      // Update rarity settings
      setLayers((prevLayers) => {
        const newImages2 = newImages.map((image, idx, array) => {
          image.rarity.value = 50;
          image.rarity.max = array.length * 50;
          image.rarity.percentage = 100 / array.length;
          return image;
        });
        prevLayers[currentLayer].images = newImages2;
        return [...prevLayers];
      });
      console.log("layers",layers);
    } catch (err) {
      const msg = errorHandler(err);
      if (msg !== undefined) {
      toast({ description: msg });
      }else {
      toast({ description: err.msg })
      }
    }
  };

  const ConstructImages = (files) => {
    return Promise.all(
      files.map(async (file,index) => {
        return await CreateTrait(file,index);
      }),
    );
  };
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1080,
        1080,
        "png",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file",
        1080,
        1080,
      );
    });
  
  const LoadImage = (imageObjUrl) => {
    return new Promise((resolve, reject) => {
      try {
        const img = new Image();
        
        img.onload = () => {
        //   console.log('Image width:', img.width);
        // console.log('Image height:', img.height);
        console.log("img",img )
          if(img.width !== img.height || img.width < 512 || img.height < 512 ) {
            reject({ msg: "Images too small or Not in right image ratio" });
          }
          resolve(img);
        };
        console.log("load01")
        img.src = imageObjUrl;
      } catch (err) {
        reject(err);
      }
    });
  };

 
    const imageValidator = (imgFile) => {
      return new Promise((resolve, reject) => {
     try {
      const file = imgFile;
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          // console.log('Image width:', img.width);
          // console.log('Image height:', img.height);
          if(img.width !== img.height || img.width < 512 || img.height < 512) {
            reject({ msg: "Images too small or Not in right image ratio" });
          }
          resolve(true);
        };
        img.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    } catch (err) {
      reject(err);
    }
    })
  };

  const CreateTrait = (file,index) => {
    return new Promise(async (resolve, reject) => {
      try {
        
        const valid = await imageValidator(file);
        if (valid){
        const newFileName = generateNewFileName(file.name,index);
        const renamedFile = new File([file], newFileName, { type: file.type });
        const resizedFile = await resizeFile(renamedFile);

        // console.log("file", file)
        // console.log("resizedFile:",resizedFile);
        
        const img = await LoadImage(URL.createObjectURL(resizedFile));
        // console.log("img:", img);
        // console.log("file:", file);
        // console.log(valid);
        const newFile = {
          image: img,
          preview: img.currentSrc,
          name: renamedFile.name.substring(0, renamedFile.name.indexOf(".")),
          type: renamedFile.type,
          rarity: {
            value: 50,
            max: -1,
            percentage: -1,
          },
        };
        if (img) {
          if (!imageDimension) {
            setImageDimension({
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
          }
          resolve(newFile);
        }
      }else{
        throw new Error("Invalid image files");
      }
      } catch (err) {
        reject(err);
      }
    });
  };

  return {
    DeleteTrait,
    UploadAssets,
    DeleteAllTraits,
  };
};




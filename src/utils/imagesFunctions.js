export const fileToImage = (file) => {
    return { image: URL.createObjectURL(file), name: file.name, file: file };
  };
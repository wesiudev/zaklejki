async function upload(
  files: any,
  input: any,
  setLoading: any,
  setUploaded: any
) {
  setLoading(true);

  // Create a local array of images with all data
  const localImagesArray: any = [];

  const uploadFile = async (file: any) => {
    const randId = `image-${randomId(20, "aA0")}`;
    const imageRef = ref(storage, randId);

    try {
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);

      // Resize image to 400px width and convert to .webp with optimized compression
      const webpImageBuffer = await resizeAndConvertToWebp(file);

      // Upload the .webp image
      const thumbnailRef = ref(storage, `${randId}-thumbnail.webp`);
      await uploadBytes(thumbnailRef, webpImageBuffer);
      const thumbnailUrl = await getDownloadURL(thumbnailRef);

      // Prepare the image data
      const imageData = {
        title: input.title,
        categories: input.categories,
        image_source: url,
        thumbnail_source: thumbnailUrl,
      };

      localImagesArray.push(imageData);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const resizeAndConvertToWebp = async (file: any) => {
    try {
      // Resize image to 400px width
      const resizedImageBuffer = await sharp(file)
        .resize({ width: 400 })
        .toBuffer();

      // Convert resized image to .webp with optimized compression
      const webpImageBuffer = await sharp(resizedImageBuffer)
        .webp({ quality: 70 }) // Adjust quality as needed
        .toBuffer();

      return webpImageBuffer;
    } catch (error) {
      console.error("Error resizing and converting to webp:", error);
      throw error;
    }
  };

  // Iterate through each file and upload
  const uploadPromises = files.map(uploadFile);

  try {
    // Wait for all uploads to complete
    await Promise.all(uploadPromises);

    // Pass the local array to addArrayOfImages
    await addArrayOfProducts(localImagesArray);

    // Set state variables
    setUploaded(true);
    setLoading(false);
  } catch (error) {
    console.error("Error uploading files:", error);
    setLoading(false);
  }
}

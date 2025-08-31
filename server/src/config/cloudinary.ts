import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImageToCloudinary = async (
  buffer: Buffer,
  folder: string,
  public_id?: string
): Promise<UploadApiResponse> => {
  return new Promise((res, rej) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder, // name folder in cloudinary
        public_id: public_id ? public_id : Date.now().toString(),
        resource_type: "image", // type file (image, video, raw)
        overwrite: true, // para permitir sobrescribir(update)
      },
      (error, result) => {
        if (error) {
          rej(new Error(`Error uploading image: ${error.message}`));
        }
        if (!result) {
          return rej(new Error("No response was received from Cloudinary."));
        }
        res(result);
      }
    );

    uploadStream.end(buffer);
  });
};

export const deleteImageFromCloudinary = async (
  public_id: string
): Promise<void> => {
  return new Promise((res, rej) => {
    cloudinary.uploader.destroy(public_id, (error, result) => {
      if (error) {
        return rej(new Error(`Error deleting image: ${error.message}`));
      }
      if (result?.result === "not found") {
        return rej(
          new Error(`The image with public_id "${public_id}" not found`)
        );
      }
      if (result?.result !== "ok") {
        return rej(
          new Error(`Unexpected result when deleting image: ${result?.result}`)
        );
      }

      res();
    });
  });
};
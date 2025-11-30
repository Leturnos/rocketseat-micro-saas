import { v2 as cloudinary } from 'cloudinary';

// Configuração
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Função de Upload Genérica
// Aceita o caminho do arquivo (string) ou base64
export const uploadImage = async (imageSource: string) => {
  try {
    const result = await cloudinary.uploader.upload(imageSource, {
      folder: "saasbio-images-uploads", 
    });
    
    return result; // Retorna o objeto com a URL da imagem
  } catch (error) {
    console.error("Erro ao subir imagem no Cloudinary:", error);
    throw error;
  }
};

// Função para deletar
export const deleteImage = async (publicId: string) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error("Erro ao deletar:", error);
    }
}

export default cloudinary;
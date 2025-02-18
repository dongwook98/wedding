// cloudinary cdn url 생성
export default function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string;
  format: 'jpg' | 'webp';
  option?: string;
}) {
  return `https://res.cloudinary.com/djh6yoso2/image/upload/${option}/v1739770497/${format}/${filename}.${format}`;
}

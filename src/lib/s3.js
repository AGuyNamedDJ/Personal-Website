import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function listPhotos(prefix = "", bucketName) {
  if (!bucketName) {
    throw new Error("listPhotos requires a bucketName argument");
  }
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Prefix: prefix,
  });
  const response = await s3.send(command);
  const region = process.env.AWS_REGION;
  return (response.Contents || []).map((item) =>
    `https://${bucketName}.s3.${region}.amazonaws.com/${item.Key}`
  );
}
import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5">
      <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    </div>
  );
}

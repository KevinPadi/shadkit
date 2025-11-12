import Image from "next/image";

const data = {
  heading: "ShadKit",
  image: {
    src: "https://plus.unsplash.com/premium_photo-1754513910317-2e1fe59ddd38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2060",
    alt: "Hero section image",
  },
};

const Hero2 = () => {
  return (
    <section className="py-20 px-3">
      <div className="container mx-auto">
        <div className="grid items-center gap-2">
          <h1 className="text-balance font-medium text-[86px] lg:text-9xl tracking-[-0.07em]">
            {data.heading}
          </h1>
            <Image
            src={data.image.src}
            alt={data.image.alt}
            className="max-h-[416px] w-full rounded-lg object-cover"
            width={"1200"}
            height={"600"}
          />
        </div>
      </div>
    </section>
  );
};

export { Hero2 };

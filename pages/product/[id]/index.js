import { useRouter } from "next/router";
import Nav from "../../../components/Header/Nav";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://server.easyshop50.com/product");
  const data = await res.json();

  const paths = await data.data.map((pd) => {
    return {
      params: {
        id: pd._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://server.easyshop50.com/product/get_product/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

const Index = ({data}) => {
   console.log(data)
  return (
    <div>
      <Nav />
      <div>
        <Image height="200" width="400" src={`https://server.easyshop50.com/${data.img}`} alt="" />
        <h2>{data.title}</h2>
        <p>Price: {data.price}</p>
      </div>
    </div>
  );
};

export default Index;

import Link from "next/link";
import Nav from "../../components/Header/Nav";
import Image from "next/image";
import styles from "../dashboard/dashboard.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://server.easyshop50.com/product");
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

const Index = ({ data }) => {
  return (
    <div>
      <Nav />

      <h2>This is Dashboard</h2>

      <div className={styles.product_conntainer}>
        {data?.length &&
          data.map((pd) => {
            return (
              <div key={pd._id}>
                <Image
                  src={`https://server.easyshop50.com/${pd.img}`}
                  height={100}
                  width={500}
                  alt=""
                />
                <p>{pd.title}</p>
                <Link href={`/product/${pd._id}`}>Click Here</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Index;

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hola, Soy <strong>Cristian Florez.</strong> Soy un{" "}
          <strong>Ingeniero Mecatronico</strong>. Y estoy aprendiendo a ser{" "}
          <strong>FullStack Developer.</strong>
        </p>
        <p>
          Esto es un simple blog, realizado en NextJS. Debido a que quiero a
          <a href="https://nextjs.org"> NextJS</a> como{" "}
          <strong>Framework del FrontEnd</strong>. Puedes revisar mi{" "}
          <a href="https://github.com/IngenieroFlorez"> GitHud</a> para ver mis
          repositorios.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

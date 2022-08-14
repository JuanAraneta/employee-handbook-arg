import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Layout } from "../../components/layout";
import { PostSnippet } from "../../types";
import { RecentPosts } from "../../components/recentPosts";
import { SidebarItem } from "../../components/layout/Sidebar";
import { Pagination } from "../../components/pagination";
import { SEO } from "../../components/seo";

export const pageQuery = graphql`
  query allBlogPosts {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          tags
          title
          imgAlt
          description
          publishedDate
          img {
            childImageSharp {
              fluid(maxWidth: 2400, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

interface Post {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: PostContent;
}

interface PostContent {
  tags: string[];
  title: string;
  imgAlt: string;
  description: string;
  publishedDate: string;
  img: { childImageSharp: { fluid: FluidObject } };
}

interface QueryData {
  allMarkdownRemark: {
    nodes: Post[];
  };
}

interface Home {
  data: QueryData;
}

const mapPostData = (node: Post): PostSnippet => ({
  title: node.frontmatter.title,
  summary: node.frontmatter.description,
  href: node.fields.slug,
  img: node.frontmatter.img.childImageSharp.fluid,
  imgAlt: node.frontmatter.imgAlt,
  tags: node.frontmatter.tags,
  publishedDate: new Date(node.frontmatter.publishedDate),
});

const Home: FunctionComponent<Home> = ({ data }) => {
  const allPosts: PostSnippet[] = data.allMarkdownRemark.nodes.map(mapPostData);
  return (
    <>
      <SEO title="Home" image="/logo.png" />
      <Layout items={allPosts.map(({ title, href }) => ({ title, href }))}>
        <RecentPosts recentPosts={allPosts} />
        <Pagination next="/page/2" />
      </Layout>
    </>
  );
};

export default Home;

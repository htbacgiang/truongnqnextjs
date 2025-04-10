import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import ContentWrapper from "../../components/admin/ContentWrapper";
import LatestPostListCard from "../../components/admin/LatestPostListCard";
import LatesUserTable from "../../components/admin/LatesUserTable";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  LatestUserProfile,
  PostDetail,
} from "../../utils/types";

interface Props {}

const Admin: NextPage<Props> = () => {
  const [latestPosts, setLatestPosts] = useState<PostDetail[]>();
  // const [latestComments, setLatestComments] = useState<LatestComment[]>();
  const [latestUsers, setLatestUsers] = useState<LatestUserProfile[]>();

  useEffect(() => {
    // fetching latest posts
    axios("/api/posts?limit=5&skip=0")
      .then(({ data }) => {
        setLatestPosts(data.posts);
      })
      .catch((err) => console.log(err));

    // fetching latest comments
    // axios("/api/comment/latest")
    //   .then(({ data }) => {
    //     setLatestComments(data.comments);
    //   })
    //   .catch((err) => console.log(err));

    // fetching latest users
    axios("/api/user")
      .then(({ data }) => {
        setLatestUsers(data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex space-x-10">
        <ContentWrapper seeAllRoute="/admin/posts" title="Bài viết mới nhất">
          {latestPosts?.map(({ id, title, meta, slug }) => {
            return (
              <LatestPostListCard
                key={id}
                title={title}
                meta={meta}
                slug={slug}
              />
            );
          })}
        </ContentWrapper>

        <ContentWrapper title="Người dùng mới nhất" seeAllRoute="/admin/users">
          <LatesUserTable users={latestUsers} />
        </ContentWrapper>

      </div>

    </>
  );
};

export default Admin;

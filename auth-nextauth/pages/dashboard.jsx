import { getSession, useSession } from "next-auth/react";

const Dashboard = ({ data }) => {
  return <div>{data}</div>;
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: "DashBoard Analytic",
    },
  };
};

export default Dashboard;

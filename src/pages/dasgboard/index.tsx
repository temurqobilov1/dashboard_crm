import { useQueryHandler } from "../../hooks/useQuery";

function Dashboard() {
  const { data } = useQueryHandler({
    url: "api/staff/all-managers",
    pathname: "managers",
  });
  console.log(data);
  return <div>Dashboard</div>;
}

export default Dashboard;

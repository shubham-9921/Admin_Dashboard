import { Link, useLocation, Location } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { IconType } from "react-icons";
import { FaChartLine } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiCoupon2Fill } from "react-icons/ri";
import { TiStopwatch } from "react-icons/ti";
import { LuCoins } from "react-icons/lu";
const AdminSidebar: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <aside>
        <h1>Logo</h1>

        <DivOne location={location}></DivOne>
        <DivTwo location={location}></DivTwo>
        <DivThree location={location}></DivThree>
      </aside>
    </>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5> Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        text={"Dashboard"}
        location={location}
        Icon={MdSpaceDashboard}
      />
      <Li
        url="/admin/products"
        text={"Products"}
        location={location}
        Icon={MdOutlineProductionQuantityLimits}
      />
      <Li
        url="/admin/customers"
        text={"Customers"}
        location={location}
        Icon={FaUsers}
      />
      <Li
        url="/admin/transactions"
        text={"Transactions"}
        location={location}
        Icon={AiOutlineTransaction}
      />
    </ul>
  </div>
);

const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5> Charts</h5>
    <ul>
      <Li
        url="/admin/charts/bar"
        text={"Bar"}
        location={location}
        Icon={AiOutlineBarChart}
      />
      <Li
        url="/admin/charts/pie"
        text={"Pie"}
        location={location}
        Icon={FaChartPie}
      />
      <Li
        url="/admin/charts/line"
        text={"Line"}
        location={location}
        Icon={FaChartLine}
      />
    </ul>
  </div>
);
const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/coupon"
        text={"Coupon"}
        location={location}
        Icon={RiCoupon2Fill}
      />
      <Li
        url="/admin/app/stopwatch"
        text={"Stopwatch"}
        location={location}
        Icon={TiStopwatch}
      />
      <Li
        url="/admin/app/toss"
        text={"Toss"}
        location={location}
        Icon={LuCoins}
      />
    </ul>
  </div>
);

interface LiProps {
  url: string;
  location: Location;
  text: string;
  Icon: IconType;
}

const Li = ({ url, location, text, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url) ? "#81DAE3" : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;

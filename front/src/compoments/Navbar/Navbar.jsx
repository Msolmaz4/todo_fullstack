import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const dert = [
   
    {
      url: "/about",
      name: "about",
    },
    {
      url: "/contact",
      name: "contact",
    },
    {
      url: "/login",
      name: "login",
    },
    {
      url: "/register",
      name: "register",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "25px" }}>
      {dert?.map((item, i) => (
        <div key={i}>
          {/* //link kulandim sayfa a hat averdi ilk once renk geldi sonra giiti  Bu durum, sayfanın yeniden render edilmesiyle ilgili olabilir. Link'e tıklandığında, sayfa yeniden render ediliyor ve belki de bu süre zarfında location.pathname güncellenmiyor. */}
          <Link to={item.url}>
            <div
              style={{
                color: item.url == location?.pathname ? "red" : "black",
              }}
            >
              {item.name}{" "}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;

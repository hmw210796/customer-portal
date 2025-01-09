const SiteFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      {" "}
      <div className="container mx-auto text-center">
        {" "}
        <p>&copy; {new Date().getFullYear()} App created by Ming Wei</p>{" "}
      </div>{" "}
    </footer>
  );
};

export default SiteFooter;

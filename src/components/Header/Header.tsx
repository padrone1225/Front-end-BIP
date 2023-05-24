import Button from "../Buttons/Button";
import IconButton from "../Buttons/IconButton";
import Icon from "../icons/Icon";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-24 md:px-20">
        <div className="flex items-center py-25 gap-60 md:gap-24">
          <img src="logo.svg" alt="logo" className="h-40" />
          <Icon name="Search" />
        </div>
        <div className="flex gap-24 items-center md:hidden">
          <Button
            size="lg"
            iconSize="sm"
            viewBox="0 0 16 16"
            variant="secondary"
            iconRight="Bottom"
            disable={false}
            title="DiscoverBrands"
          />
          <h1>Dashboard</h1>
          <h1>Vault</h1>
          <h1>Deal Status</h1>
          <h1>Chat</h1>
        </div>
        <div className="flex items-center gap-16">
          <Button
            size="lg"
            iconLeft="Plus"
            iconSize="xs"
            viewBox="0 0 16 16"
            disable={false}
            title="List"
          />
          <IconButton size="md" name="NotificationOn" className=" xs:hidden" />
          <IconButton size="md" name="User" className=" xs:hidden" />
          <IconButton size="md" name="Hamburger" className=" hidden md:block" />
        </div>
      </div>
    </header>
  );
};

export default Header;

import Button from "../Buttons/Button";
import Icon from "../icons/Icon";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-24">
        <div className="flex items-center py-25 gap-60">
          <img src="logo.svg" alt="logo" className="h-40" />
          <Icon name="Search" />
        </div>
        <div className="flex gap-24 items-center">
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
        <div>
          <Button
            size="lg"
            iconLeft="Plus"
            iconSize="xs"
            viewBox="0 0 16 16"
            disable={false}
            title="List"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

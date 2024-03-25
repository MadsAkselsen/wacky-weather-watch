import ToggleThemeButton from 'components/ToggleThemeButton/ToggleThemeButton';
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      	<h1>Settings Page</h1>
      	<p>Here you can configure your settings.</p>
        <ToggleThemeButton />
    </div>
  );
};

export default Settings;

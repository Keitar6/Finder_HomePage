import { createContext, PropsWithChildren, useState } from 'react';
import { Notification } from '../components/molecules/NotificationCard/NotificationCard';

export const NotificationsMock: Notification[] = [
  {
    title: 'Get 2 months of Disney Plus free',
    description: "Don't miss out! Get 3 months of streaming for the price of 1",
    iconName: null,
    isDissmised: false,
  },
  {
    title: 'Exclusive Finder offers ',
    description: "View deals that you can't find anywhere else",
    iconName: 'tag',
    isDissmised: false,
  },
];

type Value = {
  notifications: Notification[];
  setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
};

const InitialValue: Value = {
  notifications: NotificationsMock,
  setNotifications: () => 1,
};

export const GeneralContext = createContext(InitialValue);

const GeneralProvider = ({ children }: PropsWithChildren) => {
  const [notifications, setNotifications] = useState<Notification[]>(NotificationsMock);

  const value: Value = {
    notifications,
    setNotifications,
  };

  return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
};

export default GeneralProvider;

import {
	type FC,
	type PropsWithChildren,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import type { NotificationProps, NotificationType } from "../../components/NotificationBanner/types";
import context from "./context";
import type { NotificationContextProps } from "./types";
import { getDatabaseList } from "../../api/request/commonQueries";

const { Provider } = context;
const MAX_NOTIFICATIONS = 3;

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
	const [notificationList, setNotificationList] = useState<NotificationType[]>(
		[]
	);

	useEffect(() => {
		const fetchNotifications = async () => {
			return await getDatabaseList<NotificationType>("notifications");
		};
		
		fetchNotifications().then((data) => {
			if (data.length > 0) {
				setNotificationList(data)
			}
		});
	}, []);

	const notifications = useMemo(
		() =>
			notificationList.length > MAX_NOTIFICATIONS
				? notificationList.slice(0, MAX_NOTIFICATIONS)
				: notificationList,
		[notificationList],
	);

	const registerNotification = useCallback((notice: NotificationProps) => {
		setNotificationList((d) => [...d, { ...notice }]);
	}, []);

	const dismissNotification = useCallback((id: NotificationProps["id"]) => {
		setNotificationList((d) => d.filter((i) => i.id !== id));
	}, []);

	const clearNotification = useCallback(() => {
		setNotificationList([]);
	}, []);

	const value: NotificationContextProps = useMemo(
		() => ({
			notifications,
			registerNotification,
			dismissNotification,
			clearNotification,
		}),
		[notifications],
	);

	return <Provider value={value}>{children}</Provider>;
};

export default NotificationProvider;

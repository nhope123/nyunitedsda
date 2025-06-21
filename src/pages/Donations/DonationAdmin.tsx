import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, useState } from "react";
import { performQuery } from "../../api/queryData";
import { getDatabaseList } from "../../api/request/commonQueries";
import type { Donations as DonationsType } from "../../api/request/types";
import RingLoader from "../../components/Loaders/RingLoader";
import PageTitle from "../../components/PageWrapper/PageTitle";
import DonationEditor from "../../forms/collection/DonationEditor/DonationEditor";
import DonationItem from "./components/DonationItem";

const DONATION_HEADER = "Donation Management";
const DONATION_SUBHEADER = "Manage your donation methods";
const DONATION_TEXT =
	"Here you can view and manage the donation methods available for your project.";

const DonationAdmin: FC = () => {
	const { isLoading, data } = performQuery(
		["get-donations"],
		async () => await getDatabaseList<DonationsType>("donations"),
	);

	const [open, setOpen] = useState<boolean>(true);

	return (
		<>
			<PageTitle title={DONATION_HEADER} subtitle={DONATION_SUBHEADER} />
			<Stack spacing={2} className="fade-in">
				<Typography color="text.primary">{DONATION_TEXT}</Typography>
				{isLoading && (
					<Stack
						width="100%"
						height="100%"
						justifyContent="center"
						className="fade-in"
					>
						<RingLoader />
					</Stack>
				)}

				{!isLoading &&
					(data || ([] as DonationsType[])).map((i) => (
						<DonationItem
							key={i.id}
							title={i.title}
							subtitle={i.description}
							onEdit={() => setOpen(true)}
							onDelete={() => console.log("Delete clicked for", i.title)}
						/>
					))}

				{!isLoading && open && (
					<DonationEditor
						open={open}
						entity={data?.[0]}
						onClose={() => setOpen(false)}
					/>
				)}
			</Stack>
		</>
	);
};

export default DonationAdmin;

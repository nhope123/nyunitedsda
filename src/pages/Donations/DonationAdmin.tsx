import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, useCallback, useState } from "react";
import { performQuery } from "../../api/queryData";
import { getDatabaseList } from "../../api/request/commonQueries";
import type { Donations as DonationsType } from "../../api/request/types";
import RingLoader from "../../components/Loaders/RingLoader";
import PageTitle from "../../components/PageWrapper/PageTitle";
import DonationEditor from "../../forms/collection/DonationEditor/DonationEditor";
import DonationItem from "./components/DonationItem";
import { deleteEntity } from "../../api/request/commonMutations";
import { useSnackbar } from "notistack";
import ConfirmationDialog from "../../components/ConfirmationDialog/ConfirmationDialog";

const DONATION_HEADER = "Donation Management";
const DONATION_SUBHEADER = "Manage your donation methods";
const DONATION_TEXT =
	"Here you can view and manage the donation methods available for your project.";
const DELETE_ITEM_TITLE = "Delete Donation Method";
const DELETE_CONFIRMATION_TEXT =
	"Are you sure you want to delete this donation method? This action cannot be undone.";

const DonationAdmin: FC = () => {
	const { enqueueSnackbar } = useSnackbar();

	const [selectedItem, setSelectedItem] = useState<DonationsType | undefined>();
	const [deleteItemId, setDeleteItemId] = useState<number | undefined>();

	const { isLoading, data } = performQuery(
		["get-donations"],
		async () => await getDatabaseList<DonationsType>("donations"),
	);

	const _handleDelete = useCallback(async (id: number) => {
		try {
			const res: { success: boolean } = await deleteEntity("donations", id);
			if (res?.success) {
				enqueueSnackbar("Donation method deleted successfully", {
					variant: "success",
				});
			}
		} catch (error) {
			enqueueSnackbar(String(error), { variant: "error" });
		} finally {
			setSelectedItem(undefined);
		}
	}, []);

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
							onEdit={() => setSelectedItem(i)}
							onDelete={() => setDeleteItemId(i.id)}
						/>
					))}

				{!isLoading && selectedItem && (
					<DonationEditor
						open={!!selectedItem}
						entity={selectedItem}
						onClose={() => setSelectedItem(undefined)}
					/>
				)}
				{deleteItemId && (
					<ConfirmationDialog 
					title={DELETE_ITEM_TITLE} 
					content={DELETE_CONFIRMATION_TEXT} 
					open={!!deleteItemId} 
					onConfirm={() => _handleDelete(deleteItemId)}
					 onClose={() => setDeleteItemId(undefined)}					
					/>
				)}
			</Stack>
		</>
	);
};

export default DonationAdmin;

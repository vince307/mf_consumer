import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useGetData } from "../stores/NewsStore";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import { create } from "zustand";
import DialogContent from "@mui/material/DialogContent";
import image369 from "./../assets/worlledger.png";
import Alert from "@mui/material/Alert";
import Provider from "provider";

type Article = {
	id: string;
	title: string;
	image: string;
	summary: string;
	text: string;
	authors: string[];
	publish_date: string;
};

type State = {
	isModalOpen: boolean;
	articleContent: Article;
};

type Action = {
	updateIsModalOpen: (isModalOpen: State["isModalOpen"]) => void;
	updateArticleContent: (articleContent: State["articleContent"]) => void;
};

const initialArticleContent: Article = {
	id: "",
	title: "",
	image: "",
	summary: "",
	text: "",
	authors: [],
	publish_date: "",
};

const useModalStore = create<State & Action>((set) => ({
	isModalOpen: false,
	articleContent: initialArticleContent,
	updateIsModalOpen: (isModalOpen) => set(() => ({ isModalOpen: isModalOpen })),
	updateArticleContent: (articleContent) =>
		set(() => ({ articleContent: articleContent })),
}));

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<unknown>;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Hero() {
	const getData = useGetData() as {
		loading: boolean;
		loadingMore: boolean;
		offset: number;
		error: boolean;
		errorData: null | string;
		data: [];
		totalResults: number;
		success: boolean;
		execute: () => void;
		loadMore: () => void;
	};

	useEffect(() => {
		getData.execute();
	}, [getData.execute]);

	useEffect(() => {
		getData.loadingMore;
		getData.data;
	}, [getData.loadingMore, getData.data]);

	const isModalOpen = useModalStore((state) => state.isModalOpen);
	const updateIsModalOpen = useModalStore((state) => state.updateIsModalOpen);
	const articleContent = useModalStore((state) => state.articleContent);
	const updateArticleContent = useModalStore(
		(state) => state.updateArticleContent,
	);

	const loadMore = () => {
		getData.loadMore();
	};

	const handleClickOpen = (article: Article) => {
		updateIsModalOpen(true);
		updateArticleContent(article);
	};

	const handleClose = () => {
		updateIsModalOpen(false);
		updateArticleContent(initialArticleContent);
	};

	return (
		<Box
			id="news"
			sx={(theme) => ({
				width: "100%",
				backgroundRepeat: "no-repeat",
				backgroundImage:
					"radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
				...theme.applyStyles("dark", {
					backgroundImage:
						"radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
				}),
			})}
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					pt: { xs: 10, sm: 13 },
					pb: { xs: 8, sm: 12 },
				}}
			>
				<Stack
					spacing={2}
					useFlexGap
					sx={{ alignItems: "center", width: "fit-content" }}
				>
					<Grid container spacing={2}>
						<Grid
							size={4}
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 2,
								minWidth: {
									xs: "100%",
									sm: "100%",
									md: "20%",
									lg: "20%",
									xl: "20%",
								},
							}}
						>
							<Provider />
						</Grid>

						<Grid
							size={8}
							sx={{
								display: "flex",
								flexDirection: "column",
								overflow: "auto",
								maxHeight: "110vh",
								gap: 2,
								minWidth: {
									xs: "100%",
									sm: "100%",
									md: "30%",
									lg: "30%",
									xl: "30%",
								},
							}}
						>
							<Dialog
								fullScreen
								open={isModalOpen}
								onClose={handleClose}
								TransitionComponent={Transition}
							>
								<AppBar sx={{ position: "relative" }}>
									<Toolbar style={{ width: "100%" }}>
										<Box
											sx={{
												display: "flex",
												flexDirection: "row",
												p: 1,
												m: 1,
											}}
										>
											<img
												src={image369}
												alt="worlledger"
												style={{ width: 32, height: 32, marginRight: 10 }}
											/>

											<Typography
												variant="h6"
												noWrap
												component="a"
												href="#app-bar-with-responsive-menu"
												sx={{
													mr: 2,
													display: { xs: "none", md: "flex" },
													fontFamily: "monospace",
													fontWeight: 700,
													letterSpacing: ".3rem",
													color: "inherit",
													textDecoration: "none",
												}}
											>
												WorldLedger
											</Typography>
										</Box>
										<Box
											sx={{
												display: "flex",
												flexDirection: "row-reverse",
												p: 1,
												m: 1,
												width: "100%",
											}}
										>
											<IconButton
												edge="start"
												color="inherit"
												onClick={handleClose}
												aria-label="close"
												sx={{
													display: "flex",
													flexDirection: "row-reverse",
												}}
											>
												<CloseIcon />
											</IconButton>
										</Box>
									</Toolbar>
								</AppBar>

								<DialogContent dividers>
									<CardMedia
										component="img"
										height="240"
										image={articleContent.image}
										alt={articleContent.title}
									/>
									<Typography
										sx={{
											mb: 2,
											mt: 2,
										}}
										variant="h3"
										gutterBottom
									>
										{articleContent.title}
									</Typography>
									<Divider />
									<Typography variant="body1" gutterBottom>
										{articleContent.text}
									</Typography>
									{articleContent?.authors?.length > 0 && (
										<>
											<Divider />
											<Typography
												sx={{
													mb: 2,
													mt: 2,
												}}
												variant="body2"
												gutterBottom
											>
												Author: {articleContent?.authors[0]}
											</Typography>
										</>
									)}
									<Divider />
									<Typography variant="body2" gutterBottom>
										Publish date: {articleContent.publish_date}
									</Typography>
								</DialogContent>
							</Dialog>
							<Box>
								<div>
									{getData.loading ? (
										<p>Loading...</p>
									) : getData.error ? (
										<Alert variant="filled" severity="error">
											We experienced some issues while fetching the data. Please
											try again later.
										</Alert>
									) : (
										<>
											{getData.data?.map((article: Article) => (
												<Card
													key={article.id}
													sx={{
														mb: 2,
													}}
												>
													<Card
														sx={{
															mb: 2,
															border: 0,
														}}
													>
														<CardMedia
															component="img"
															height="140"
															image={article.image}
															alt={article.title}
														/>
														<CardContent>
															<Typography
																gutterBottom
																variant="h5"
																component="div"
																sx={{
																	mt: 2,
																}}
															>
																{article.title}
															</Typography>
															<Typography
																variant="body2"
																sx={{ color: "text.secondary" }}
															>
																{article.summary}
															</Typography>
														</CardContent>
													</Card>
													<CardActions
														sx={{
															display: "flex",
															flexDirection: "row-reverse",
														}}
													>
														<Button
															onClick={() => handleClickOpen(article)}
															size="medium"
															color="primary"
															variant="outlined"
														>
															Read more
														</Button>
													</CardActions>
												</Card>
											))}
										</>
									)}
								</div>
								<Box>
									{!getData.loadingMore &&
										!getData.loading &&
										!getData.error && (
											<Button
												fullWidth
												onClick={() => loadMore()}
												size="medium"
												color="primary"
												variant="outlined"
											>
												Load more
											</Button>
										)}

									{getData.loadingMore && (
										<Button fullWidth loading variant="outlined" />
									)}
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Stack>
			</Container>
		</Box>
	);
}

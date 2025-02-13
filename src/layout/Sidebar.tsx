import {
  Drawer as MuiDrawer,
  List,
  ListItemText,
  Divider,
  ListItemButton,
  Button,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InventoryIcon from "@mui/icons-material/Inventory";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router";
import { styled, Theme, CSSObject } from "@mui/material/styles";

type SidebarProps = {
  drawerWidth: number;
  open: boolean;
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
};

const SideBar = ({
  drawerWidth,
  open,
  handleDrawerClose,
  mobileOpen,
}: SidebarProps) => {
  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        },
      },
    ],
  }));
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    { name: "Products", path: "/products", icon: <InventoryIcon /> },
    { name: "Categories", path: "/categories", icon: <CategoryIcon /> },
    { name: "Orders", path: "/orders", icon: <ShoppingCartIcon /> },
    { name: "Reviews", path: "/reviews", icon: <RateReviewIcon /> },
  ];
  const container =
    window !== undefined ? () => window.document.body : undefined;
  // const handleDrawerTransitionEnd = () => {
  //   setIsClosing(false);
  // };
  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setMobileOpen(!mobileOpen);
  //   }
  // };
  return (
    <Drawer
      // container={container}
      variant={"temporary"}
      open={open}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <DrawerHeader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <Typography sx={{ textAlign: "center" }}>Tiny Toes</Typography>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item, idx) => (
          <ListItem key={idx} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleDrawerClose}
      >
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Button>
    </Drawer>
  );
};

export default SideBar;

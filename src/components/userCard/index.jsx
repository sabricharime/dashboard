import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

export default function CardProfile() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "grid",
        placeItems: "center",
        marginBlockStart: 3,
      }}
    >
      <Card variant="outlined">
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            maxWidth: 300,
            width: "100%",
            minHeight: 200,
            padding: 4,
          }}
        >
          <Badge
            variant="dot"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            overlap="circular"
            color="success"
          >
            <Avatar size="small" src="/2.jpg">
              sabri charime
            </Avatar>
          </Badge>
          <Typography variant="h3">Sabri Charime</Typography>
          <Typography variant="body1">Skikda Algeria </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button fullWidth variant="contained">
            Edit Profile
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Badge,
  IconButton,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EmailIcon from '@mui/icons-material/Email';

import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#e0dcd2', // Light brown background
}));

const NotificationsContainer = styled(Paper)(({ theme }) => ({
  width: '80%', // Make it take up half the screen width
  height: '80vh', // Make it take up half the screen height
  borderRadius: 10,
  overflow: 'hidden',
  boxShadow: theme.shadows[3],
  backgroundColor: '#f5f5f5', // Light brownish background
  color: '#3e2723', // Deep brown color
}));

const NotificationHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
  backgroundColor: '#6d4c41', // Medium brown background
  color: theme.palette.common.white,
}));

const NotificationList = styled(List)(({ theme }) => ({
  maxHeight: '80%', // Adjust height to fit container
  overflowY: 'auto',
}));

const NotificationItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const notificationsData = [
    { id: 1, title: 'Template Published', time: '3d', read: false },
    { id: 2, title: 'New Comment on Your Post', time: '2d', read: false },
    { id: 3, title: 'Friend Request Accepted', time: '1d', read: true },
    { id: 4, title: 'New Message from John', time: '5h', read: false },
    { id: 5, title: 'Event Reminder: Team Meeting', time: '1w', read: true },
    { id: 6, title: 'Password Changed Successfully', time: '2w', read: true },
    { id: 7, title: 'New Like on Your Photo', time: '1h', read: false },
    { id: 8, title: 'Update Available: v2.0.1', time: '3w', read: true },
    { id: 9, title: 'Subscription Expiring Soon', time: '4d', read: false },
    { id: 10, title: 'Your Order Has Shipped', time: '6h', read: true },
    { id: 11, title: 'Security Alert: New Login from Unknown Device', time: '30m', read: false },
    { id: 12, title: 'New Follow Request', time: '2w', read: true },
    { id: 13, title: 'Weekly Newsletter', time: '1mo', read: true },
    { id: 14, title: 'Reminder: Project Deadline Tomorrow', time: '2d', read: false },
    { id: 15, title: 'Event Invitation: Webinar on React', time: '3d', read: true },
  ];

export default function Inbox() {
  const [open, setOpen] = React.useState(true);
  const [notifications, setNotifications] = useState(notificationsData);
  const [mailDialogOpen, setMailDialogOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const handleRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleRespond = (notification) => {
    setSelectedNotification(notification);
    setMailDialogOpen(true);
  };

  const handleMailDialogClose = () => {
    setMailDialogOpen(false);
    setSelectedNotification(null);
  };

  return (
    <BackgroundContainer>
      <NotificationsContainer>
        <NotificationHeader>
          <Typography variant="h6">Messages</Typography>
          {/* <Badge badgeContent={notifications.filter(n => !n.read).length} color="secondary"> */}
            {/* <NotificationsIcon /> */}
          {/* </Badge> */}
          <IconButton color="inherit" size="small" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </NotificationHeader>
        <NotificationList>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} button>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: notification.read ? '#ccc' : '#6d4c41' }}>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={notification.title}
                secondary={notification.time}
              />
              <Box>
                <IconButton onClick={() => handleDelete(notification.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleRead(notification.id)}>
                  <MarkEmailReadIcon />
                </IconButton>
                <IconButton onClick={() => handleRespond(notification)}>
                  <EmailIcon />
                </IconButton>
              </Box>
            </NotificationItem>
          ))}
        </NotificationList>
        <Box p={1} textAlign="center">
          <Typography variant="caption" color="textSecondary">
            MuSeek
          </Typography>
        </Box>
        <Dialog open={mailDialogOpen} onClose={handleMailDialogClose}>
          <DialogTitle>Send Response</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Responding to: {selectedNotification?.title}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Your Message"
              type="text"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleMailDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleMailDialogClose} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </NotificationsContainer>
    </BackgroundContainer>
  );
}
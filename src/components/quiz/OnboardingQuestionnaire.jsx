import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  IconButton,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import questions from './Questions';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#f5f5f5', // Light brownish background
    color: '#3e2723', // Deep brown color
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6d4c41', // Medium brown background
  color: 'white',
  '&:hover': {
    backgroundColor: '#5d4037', // Dark brown color on hover
  },
}));

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: '#8d6e63', // Medium brown color
  '&.Mui-checked': {
    color: '#5d4037', // Dark brown color when checked
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#3e2723', // Deep brown color
}));

const OnboardingQuestionnaire = ({ open, onClose, onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const handleToggle = (questionIndex, option) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };
      if (!newAnswers[questionIndex]) newAnswers[questionIndex] = [];
      if (newAnswers[questionIndex].includes(option)) {
        newAnswers[questionIndex] = newAnswers[questionIndex].filter(
          (answer) => answer !== option
        );
      } else {
        newAnswers[questionIndex].push(option);
      }
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    console.log('User Answers: ', answers);
    onSubmit(answers); // Call the onSubmit callback with the answers
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
          <DialogTitle>Music Taste Questionnaire</DialogTitle>
          <StyledIconButton onClick={onClose}>
            <CloseIcon />
          </StyledIconButton>
        </Box>
        <DialogContent dividers>
          {questions.map((q, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6">{q.question}</Typography>
              {q.options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <StyledCheckbox
                      checked={answers[index]?.includes(option) || false}
                      onChange={() => handleToggle(index, option)}
                    />
                  }
                  label={option}
                />
              ))}
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </StyledButton>
        </DialogActions>
      </Paper>
    </StyledDialog>
  );
};

export default OnboardingQuestionnaire;
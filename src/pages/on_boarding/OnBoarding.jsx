import React, { useState } from 'react';
import { Button, Container, Box, Typography, Paper } from '@mui/material';
import OnboardingQuestionnaire from '../../components/quiz/OnboardingQuestionnaire';
import { styled } from '@mui/system';
import questions from '../../components/quiz/Questions';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#e0dcd2', // Light brown background
  color: '#3e2723', // Deep brown color
  minHeight: '100vh',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  flexDirection: 'column',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6d4c41', // Medium brown background
  color: 'white',
  '&:hover': {
    backgroundColor: '#5d4037', // Dark brown color on hover
  },
}));

const AnswersPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5', // Light brownish background
  color: '#3e2723', // Deep brown color
}));

const OnBoarding1 = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleOpenQuestionnaire = () => {
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    setIsQuestionnaireOpen(false);
  };

  const handleQuestionnaireSubmit = (submittedAnswers) => {
    setAnswers(submittedAnswers);
    console.log('Final Answers:', submittedAnswers);
  };

  return (
    <StyledContainer>
      <StyledBox>
        <StyledButton onClick={handleOpenQuestionnaire}>
          Start Onboarding Questionnaire
        </StyledButton>
        <OnboardingQuestionnaire
          open={isQuestionnaireOpen}
          onClose={handleCloseQuestionnaire}
          onSubmit={handleQuestionnaireSubmit}
        />
        {Object.keys(answers).length > 0 && (
          <AnswersPaper elevation={3}>
            <Typography variant="h6">Your Answers</Typography>
            {Object.keys(answers).map((questionIndex) => (
              <Box key={questionIndex} mb={2}>
                <Typography variant="subtitle1">
                  {questions[questionIndex].question}
                </Typography>
                <Typography variant="body1">
                  {answers[questionIndex].join(', ')}
                </Typography>
              </Box>
            ))}
          </AnswersPaper>
        )}
      </StyledBox>
    </StyledContainer>
  );
};

export default OnBoarding1;
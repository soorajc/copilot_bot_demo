import { Alert } from "react-native";
import { TRAINING_TOPICS } from "../data";

interface TrainingTopic {
  title: string;
  description: string;
}

interface TrainingTopics {
  [key: string]: TrainingTopic;
}

interface DayConfig {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

const trainingTopics: TrainingTopics = TRAINING_TOPICS;

export const handleCalendarPress = (dayConfig: DayConfig) => {
  const { day, month, year } = dayConfig;
  const dateString = `${day}/${month}/${year}`;
  const dayString = day.toString();

  if (dayString in trainingTopics) {
    const { title, description } = trainingTopics[dayString];
    Alert.alert(
      "Schedule for " + dateString,
      `\n \n ${title} \n \n ${description}`
    );
  } else {
    Alert.alert(
      "No Schedule for " + dateString,
      "\n \n No training scheduled for this day."
    );
  }
};

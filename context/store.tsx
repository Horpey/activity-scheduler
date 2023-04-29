"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ActivityType } from "@/types/ActivityType";
import { PerformerType } from "@/types/PerformerType";
import { ActivityTypesType } from "@/types/ActivityTypesType";
import { PitchType } from "@/types/PitchType";

const GlobalContext = createContext({});

interface Props {
  children?: ReactNode;
}

export const GlobalContextProvider = ({ children }: Props) => {
  const [activities, setActivities] = useState<ActivityType[]>([]);

  const [performers, setPerformer] = useState<PerformerType[]>([
    {
      id: 1,
      performer: "John",
    },
    {
      id: 2,
      performer: "Tom",
    },
    {
      id: 3,
      performer: "Tony",
    },
  ]);

  const [activityTypes, setActivityTypes] = useState<ActivityTypesType[]>([
    {
      id: 1,
      activity_type: "Mowing",
    },
    {
      id: 2,
      activity_type: "Fertilization",
    },
    {
      id: 3,
      activity_type: "Irrigation",
    },
    {
      id: 4,
      activity_type: "Aeration",
    },
  ]);

  const [pitches, setPitches] = useState<PitchType[]>([
    {
      id: 1,
      pitch: "Pitch 1",
    },
    {
      id: 2,
      pitch: "Pitch 2",
    },
    {
      id: 3,
      pitch: "Pitch 3",
    },
  ]);

  useEffect(() => {
    const activities = sessionStorage.getItem("activities");
    const performers = sessionStorage.getItem("performers");
    const activityTypes = sessionStorage.getItem("activityTypes");
    const pitches = sessionStorage.getItem("pitches");

    if (activities) {
      setActivities(JSON.parse(activities));
    }

    if (performers) {
      setPerformer(JSON.parse(performers));
    }

    if (activityTypes) {
      setActivityTypes(JSON.parse(activityTypes));
    }

    if (pitches) {
      setPitches(JSON.parse(pitches));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    sessionStorage.setItem("performers", JSON.stringify(performers));
  }, [performers]);

  useEffect(() => {
    sessionStorage.setItem("activityTypes", JSON.stringify(activityTypes));
  }, [activityTypes]);

  useEffect(() => {
    sessionStorage.setItem("pitches", JSON.stringify(pitches));
  }, [pitches]);

  const contextProps = {
    activities,
    setActivities,
    performers,
    setPerformer,
    activityTypes,
    setActivityTypes,
    pitches,
    setPitches,
  };

  return (
    <GlobalContext.Provider value={{ ...contextProps }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

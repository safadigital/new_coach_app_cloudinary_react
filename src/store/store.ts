
import { create } from "zustand";


interface IStore {

  // auth
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;

// daily plan data by default
dailyPlanData: any;
setDailyPlanData: (state: any) => void;

// daily progress
progress: number;
setProgress: (state: number) => void;

// new daily plan data
newDailyPlanData: any;
setNewDailyPlanData: (state: any) => void;

currentDay: number;
setCurrentDay: (state: any) => void;

    // lesson data
  totalPages: number;
  setTotalPages: (state: number) => void;

  currentPage: number;
  setCurrentPage: (state: number) => void;

  lessonTitle: string;
  setLessonTitle: (state: string) => void;

  pageContentItems: any[];
  setPageContentItems: (state: any[]) => void;

  lessonData: any;
  setLessonData: (state: any) => void;

  isVideoPlaying: boolean;
  setIsVideoPlaying: (state: boolean) => void;

  isAudioMuted: boolean;
  setIsAudioMuted: (state: boolean) => void;

  isVideoPlaybackFast: boolean;
  setIsVideoPlaybackFast: (state: boolean) => void;

  isVideoNavShown: boolean;
  setIsVideoNavShown: (state: boolean) => void;
  
  currentTime: number;
  setCurrentTime: (state: number) => void;

}


const useStore = create<IStore>((set) => ({
  isAuth: false,
  lessonData: {},
  dailyPlanData: {},
  newDailyPlanData: {},
  totalPages: 0,
  currentPage: 1,
  lessonTitle: "",
  pageContentItems: [],
  isPlayNavigationShown: false,
  isVideoPlaying: false,
  isAudioMuted: false,
  isVideoPlaybackFast: false,
  isVideoNavShown: true,
  currentTime: 0,
  currentDay: 1,
  progress: 0,

 

  setIsAuth: (state: boolean) =>
    set(() => ({
      isAuth: state
    })),

setProgress: (state: number) =>
    set(() => ({
      progress: state
    })),

setCurrentDay: (state: number) =>
    set(() => ({
      currentDay: state
    })),

  setNewDailyPlanData: (state: any) =>
    set(() => ({
      newDailyPlanData: state
    })),

  setDailyPlanData: (state: number) =>
    set(() => ({
      dailyPlanData: state
    })),

   setCurrentTime: (state: number) =>
    set(() => ({
      currentTime: state
    })),

   setIsVideoNavShown: (state: boolean) =>
    set(() => ({
      isVideoNavShown: state
    })),

    setIsVideoPlaybackFast: (state: boolean) =>
    set(() => ({
      isVideoPlaybackFast: state
    })),

   setIsAudioMuted: (state: boolean) =>
    set(() => ({
      isAudioMuted: state
    })),

   setIsVideoPlaying: (state: boolean) =>
    set(() => ({
      isVideoPlaying: state
    })),

 setLessonData: (state: any) =>
    set(() => ({
      lessonData: state
    })),

   setPageContentItems: (state: any[]) =>
    set(() => ({
      pageContentItems: state
    })),

  setLessonTitle: (state: string) =>
    set(() => ({
      lessonTitle: state
    })),

setTotalPages: (state: number) =>
    set(() => ({
      totalPages: state
    })),

setCurrentPage: (state: number) =>
    set(() => ({
      currentPage: state
    })),
  


    // setIsVideoPlaying: (new_videoplaying: boolean) =>
    // set(() => ({
    //   isVideoPlaying: new_videoplaying
    // })),

   

 
}));

export default useStore;


import { create } from "zustand";


interface IStore {

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

}


const useStore = create<IStore>((set) => ({
  lessonData: {},
  totalPages: 0,
  currentPage: 1,
  lessonTitle: "",
  pageContentItems: [],
  isPlayNavigationShown: false,
  isVideoPlaying: false,
  isAudioMuted: false,
  isVideoPlaybackFast: false,

 


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

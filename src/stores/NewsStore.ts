import axios from "axios";
import type { AxiosError } from "axios";
import { create } from "zustand";

const initialState = {
  loading: false,
  success: false,
  totalResults: 0,
  offset: 0,
  error: false,
  data: null,
  errorData: null,
};

const todaysDate = new Date();
const formattedDate = todaysDate.toISOString().split("T")[0];

const apiUrl = import.meta.env.PUBLIC_NEWS_API_URL;
const apiKey = import.meta.env.PUBLIC_NEWS_API_KEY;

export const useGetData = create((set, get) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true });
    const url = `${apiUrl}?language=en&text=crypto&number=3`;
    try {
      const savedData = localStorage.getItem("worldLedgerData");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        if (parsedData.date === formattedDate) {
          set({ ...initialState, success: true, totalResults: parsedData.data.totalResults, data: parsedData.data.data });
          return;
        }
      }
      const res = await axios.get(url, {headers: {
        'x-api-key': apiKey
      }}); 
      const localStorageData = JSON.stringify({date: formattedDate, data: {totalResults: res.data.available, data: res.data.news}}, null, 2);
      localStorage.setItem("worldLedgerData", localStorageData);
      set({ ...initialState, success: true, totalResults: res.data.available, data: res.data.news });
      return;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        console.error("Axios error:", axiosError.message);
      } else {
        console.error("Unexpected error:", err);
      }
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err instanceof Error ? err.message : "An unexpected error occurred." });
    }
  },
  loadMore: async () => {
    set({ loadingMore: true });
    let currentData = null;
    let numberOfResults = 0;
    try {
      const savedData = localStorage.getItem("worldLedgerData");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        numberOfResults = parsedData.data.data.length;
        currentData = parsedData.data.data;
        set({ offset: numberOfResults });
      }
      const url = `${apiUrl}?language=en&text=crypto&offset=${get().offset}&number=3`;
      const res = await axios.get(url, {headers: {
        'x-api-key': apiKey
      }}); 
      const newDataSet = [...currentData, ...res.data.news];
      const localStorageData = JSON.stringify({date: formattedDate, data: {totalResults: res.data.available, data: newDataSet}}, null, 2);
      localStorage.setItem("worldLedgerData", localStorageData);
      set({ loadingMore: false, totalResults: res.data.available, data: newDataSet });
      return;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        console.error("Axios error:", axiosError.message);
      } else {
        console.error("Unexpected error:", err);
      }
      console.error("Error in data fetch:", err);
      set({ loadingMore: false, error: true, errorData: err instanceof Error ? err.message : "An unexpected error occurred." });
    }
  },
}));
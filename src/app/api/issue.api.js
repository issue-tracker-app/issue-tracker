import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import delay from "delay";

const BASE_URL = "http://localhost:8080/issues";

const fetchIssue = async (payload) => {
  const { id } = { ...payload };
  if (id) {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
  }
};

const fetchIssuesList = async () => {
  const res = await axios.get(`${BASE_URL}`);
  return res.data?.reverse();
};

const createIssue = async (payload) => {
  const { data } = { ...payload };
  await delay(2000);
  const res = await axios.post(`${BASE_URL}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

const updateIssue = async (payload) => {
  const { id, data } = { ...payload };
  await delay(2000);
  const res = await axios.put(`${BASE_URL}/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const useFetchIssue = (id) => {
  return useQuery({
    queryKey: ["issue"],
    queryFn: () => fetchIssue(id),
  });
};

export const useFetchIssuesList = () => {
  return useQuery({
    queryKey: ["issues"],
    queryFn: () => fetchIssuesList(),
  });
};

export const useCreateIssue = () => {
  return useMutation({
    mutationFn: createIssue,
    onSuccess: () => {},
  });
};

export const useUpdateIssue = () => {
  return useMutation({
    mutationFn: updateIssue,
    onSuccess: () => {},
  });
};

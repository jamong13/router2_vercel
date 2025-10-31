// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyAlWEkRQ3PcNw5GyrdCUTgnVO_DQx4ByCs",
  authDomain: "router2-6b10e.firebaseapp.com",
  projectId: "router2-6b10e",
  storageBucket: "router2-6b10e.firebasestorage.app",
  messagingSenderId: "546222454259",
  appId: "1:546222454259:web:9dda0432712e9e19d58e86",
  measurementId: "G-CWJZVVDM58",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;

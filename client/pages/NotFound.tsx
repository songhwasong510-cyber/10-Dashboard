import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-52px)]">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
          <p className="text-xl text-text-secondary mb-8">
            페이지를 찾을 수 없습니다
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-600/90 transition-colors"
          >
            대시보드로 돌아가기
          </Link>
        </div>
      </div>
    </Layout>
  );
}

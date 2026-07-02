import ContactRail from "../components/ContactRail";
import WorkDetailSidebar from "../components/WorkDetailSidebar";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <WorkDetailSidebar />
      <ContactRail />

      <div className="min-w-0 lg:pl-60 xl:pr-20">{children}</div>
    </div>
  );
}
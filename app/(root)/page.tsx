"use client"
import { Modal } from "@/components/ui/modal"
import { UserButton } from "@clerk/nextjs"

const SetupPage = () => {
  return (
    <div>
      <Modal title="test" description="test" isOpen onClose={() => {}}>
        Hello, I am David Ambokadze
      </Modal>
    </div>
  )
}
export default SetupPage
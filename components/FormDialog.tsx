'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { FormType, FORM_COPY, FORM_LINKS } from '../types'

interface FormDialogProps {
  openForm: FormType | null
  onClose: () => void
}

export function FormDialog({ openForm, onClose }: FormDialogProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    const link = openForm ? FORM_LINKS[openForm] : FORM_LINKS.free

    window.setTimeout(() => {
      window.open(link, '_blank', 'noopener,noreferrer')
      setSubmitted(false)
      onClose()
    }, 1000)
  }

  if (!openForm) return null

  const copy = FORM_COPY[openForm]

  return (
    <Dialog open={openForm !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl border border-[#3E2421]/15 bg-[#FAF6F0] p-6 sm:max-w-md shadow-2xl">
        <DialogHeader className="space-y-1.5">
          <DialogTitle className="text-xl font-bold text-[#2C1A1D]">
            {copy.title}
          </DialogTitle>
          <DialogDescription className="text-xs leading-relaxed text-[#1A1817]/70">
            {copy.description}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <div className="grid size-12 place-items-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
              <Check className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2C1A1D]">You&apos;re On the List!</h3>
            <p className="max-w-xs text-xs leading-relaxed text-[#1A1817]/70">
              Opening WhatsApp so you can complete your confirmation step...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-3 space-y-3.5">
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Full Name" id="name" placeholder="John Doe" required />
              <Field label="Email Address" id="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="WhatsApp Phone" id="phone" type="tel" placeholder="+234 ..." required />
              
              {openForm === 'vip' && (
                <Field label="Business / Role" id="role" placeholder="Founder, Creator..." required />
              )}

              {openForm === 'volunteer' && (
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="volunteer-role" className="text-[11px] font-semibold uppercase tracking-wider text-[#2C1A1D]/80">
                    Desired Role
                  </Label>
                  <Select required>
                    <SelectTrigger id="volunteer-role" className="cursor-pointer bg-white/90 border-[#3E2421]/20 h-10 text-xs">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="media" className="cursor-pointer">Media / Video</SelectItem>
                      <SelectItem value="logistics" className="cursor-pointer">Logistics</SelectItem>
                      <SelectItem value="ushering" className="cursor-pointer">Ushering</SelectItem>
                      <SelectItem value="content" className="cursor-pointer">Content Strategy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {openForm === 'vip' && (
              <>
                <Field label="Social Media Handle" id="social" placeholder="@yourhandle" required />
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="content" className="text-[11px] font-semibold uppercase tracking-wider text-[#2C1A1D]/80">
                    Desired Content to Capture
                  </Label>
                  <Textarea
                    id="content"
                    placeholder="e.g. Podcast episode, creator interview, short-form clips..."
                    required
                    className="bg-white/90 border-[#3E2421]/20 text-xs min-h-18"
                  />
                </div>
              </>
            )}

            {openForm === 'volunteer' && (
              <Field label="Portfolio Link" id="portfolio" type="url" placeholder="https://..." required />
            )}

            <Button
              type="submit"
              className="cursor-pointer mt-2 h-11 w-full rounded-full bg-[#D97706] text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-[#C25E00] transition-transform active:scale-[0.98]"
            >
              {copy.button}
              <ArrowUpRight className="ml-1 size-3.5" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Field({
  label,
  id,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string
  id: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-wider text-[#2C1A1D]/80">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-white/90 border-[#3E2421]/20 h-10 text-xs focus-visible:ring-[#D97706]"
      />
    </div>
  )
}
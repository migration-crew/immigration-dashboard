import { CaptionSemi } from '@/components/common/text/CaptionSemi';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/upImmigrationButton';

const RefundPolicyButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary' className='w-full'>
          <CaptionSemi>Read more</CaptionSemi>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Refund Policy</DialogTitle>
        </DialogHeader>
        <div>
          At [Your Company Name], customer satisfaction is our top priority. If
          you are not entirely satisfied with your purchase, we’re here to help.
          To be eligible for a refund, the item must be unused and in the same
          condition that you received it, and it must also be returned in its
          original packaging. Refund requests must be made within [X days] of
          the purchase date. Please note that certain items are not eligible for
          refunds, including gift cards, downloadable software products, and
          items marked as &quot;final sale&quot; or &quot;non-returnable.&quot;
          To request a refund, you will need to contact our customer support
          team at [Insert Contact Information], provide proof of purchase such
          as a receipt or order number, and, if required, ship the item to the
          address provided by our team. Refunds will be processed to the
          original method of payment within [X days] after we receive and
          inspect the returned item, and you will receive an email notification
          once the refund has been issued. Please note that shipping costs are
          non-refundable, and the cost of return shipping will be deducted from
          your refund unless the return is due to a defect or error on our part.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RefundPolicyButton;

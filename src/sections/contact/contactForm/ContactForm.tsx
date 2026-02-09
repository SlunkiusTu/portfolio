import { motion } from "framer-motion";
import { Button } from "../../../components/common/Button";
import { useForm, ValidationError } from "@formspree/react";
import { Textarea } from "./Textarea";
import { Input } from "./Input";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjgebydr");

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-center">
        Message sent successfully 🚀
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800"
    >
      <h3 className="text-2xl font-bold text-gray-100 mb-6 cursor-default">
        Send Me a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          name="name"
          label="Name"
          placeholder="Your full name"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="your@email.com"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <Textarea
          name="message"
          label="Message"
          placeholder="How can I help you?"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

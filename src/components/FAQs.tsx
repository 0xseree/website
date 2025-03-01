import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer }: { question: any; answer: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        {isOpen ? (
          <MinusCircle className="text-green-500" />
        ) : (
          <PlusCircle className="text-green-500" />
        )}
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-500 mt-2">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "What is a Blockchain?",
      answer:
        "A blockchain is a decentralized, distributed ledger technology that records transactions across a network of computers. It ensures data integrity and security through cryptography and consensus mechanisms.",
    },
    {
      question: "What is SWIFT?",
      answer:
        "SWIFT (Society for Worldwide Interbank Financial Telecommunications) is a global messaging network used by financial institutions to securely exchange financial messages, primarily for international transactions. It does not transfer funds but facilitates communication between banks.",
    },
    {
      question: "What is Ethereum?",
      answer:
        "Ethereum is a decentralized, open-source blockchain platform that supports smart contracts and decentralized applications (dApps). It uses Ether (ETH) as its native cryptocurrency and is known for its programmability and versatility.",
    },
    {
      question: "What is ISO 20022?",
      answer:
        "ISO 20022 is a global standard for exchanging electronic data between financial institutions, enabling efficient and standardized communication for financial transactions. It supports rich data formats, enhancing compliance and operational efficiency.",
    },
    {
      question: "What is Proof of Stake (PoS)?",
      answer:
        "Proof of Stake is a consensus algorithm used by some blockchain networks where validators are chosen to create new blocks based on the amount of cryptocurrency they hold (stake) rather than computational power. This method is more energy-efficient than Proof of Work.",
    },
    {
      question: "What is a Validator?",
      answer:
        "A validator is a node on a blockchain network that verifies transactions and creates new blocks. In Proof of Stake systems, validators are chosen based on their stake, while in other systems, they may be chosen based on different criteria. Seree runs Ethereum PoS validators in Ethiopia.",
    },
    {
      question: "What is Restaking?",
      answer:
        "Restaking refers to the process of using staked assets on a Proof of Stake network to run applications other than the consensus mechanism being run. This enables validators to earn additional fees on top of running blockchains such as Ethereum. Seree participates in restaking by running additional services such as machine learning training and zero knowledge processing.",
    },
  ];
  return (
    <div className="max-w-full md:max-w-2xl mx-auto bg-white  rounded-lg p-6">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQs;

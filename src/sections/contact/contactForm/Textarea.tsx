type Props = {
    name: string;
    label: string;
    placeholder: string;
};

export const Textarea = ({
    name,
    label,
    placeholder,
}: Props) => (
    <div>
        <label htmlFor={name} className="block text-gray-300 mb-2">
            {label}
        </label>
        <textarea
            id={name}
            name={name}
            rows={4}
            required
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-gray-800/50 border focus:outline-none focus:ring-1 focus:ring-blue-500 border-gray-700 text-gray-200 placeholder-gray-500 rounded-lg"
        />
    </div>
);


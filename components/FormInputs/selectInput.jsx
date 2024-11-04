import React from "react"

export default function selectInput({
    label,
    name,
    register,
    className = "sm:col-span-2",
    option = [],
    Multiple = false,
}) {
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-900 dark:
            text-slate-50 mb-2"
            >
                {label}

            </label>
            <div className="mt-2">
                <select
                    {...register('${name}')}
                    id={name}
                    multiple={multiplee}
                    name={name}
                    className="block w-full rounded-md border-0 py-2 text-gray-900
                 shawod-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset
                focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {Options.map((option, i) => {
                        return (
                            <option key={1} value={option.id}>
                                {option.title}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    )
}
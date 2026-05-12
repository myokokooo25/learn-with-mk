import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from './Icons';

interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  ariaLabel: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, ariaLabel, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (newValue: string | number) => {
    onChange(newValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className="mk-touch-btn flex min-h-[48px] w-full items-center justify-between rounded-xl bg-neumorphic-bg px-4 py-3 text-left text-sm font-semibold text-neumorphic-text shadow-neumorphic-outset ring-1 ring-white/30 transition-shadow duration-200 active:shadow-neumorphic-inset disabled:cursor-not-allowed disabled:opacity-50"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : '...'}</span>
        <ChevronDownIcon className={`w-5 h-5 ml-2 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full min-w-max mt-2 overflow-auto bg-neumorphic-bg rounded-lg shadow-neumorphic-outset">
          <ul role="listbox" aria-label={ariaLabel} className="p-2 space-y-1">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`cursor-pointer rounded-lg px-4 py-3 text-sm transition-all min-h-[44px] flex items-center ${option.value === value ? 'bg-white/55 font-semibold text-slate-800 shadow-neumorphic-inset' : 'text-slate-600 active:bg-white/35'}`}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
package com.example.reactnativeintegration.ui.dashboard;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.reactnativeintegration.R;
import com.example.reactnativeintegration.ReactNativeActivity;

public class DashboardFragment extends Fragment implements Button.OnClickListener {

    private DashboardViewModel dashboardViewModel;
    private Button mButton;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        dashboardViewModel =
                ViewModelProviders.of(this).get(DashboardViewModel.class);
        View root = inflater.inflate(R.layout.fragment_dashboard, container, false);
        mButton = root.findViewById(R.id.button);
        mButton.setOnClickListener(this);
        return root;
    }

    public void onClick(View view)
    {
        navigateToReactNativeScreen();
    }

    public void navigateToReactNativeScreen() {
        Intent intent = new Intent(getActivity(), ReactNativeActivity.class);
        startActivity(intent);
    }
}
